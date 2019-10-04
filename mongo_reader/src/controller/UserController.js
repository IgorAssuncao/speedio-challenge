import User from '../schemas/User';

class UserController {
  async readPercentagePagesVisited(request, response) {
    const users = await User.find();

    const usersGraph = [];
    users.forEach(user => {
      if (!usersGraph[user.user_id]) {
        const url = user.uri;
        usersGraph[user.user_id] = {
          urls: { url: { count: 1 } },
          total: 1,
        };
      } else {
        const { urls } = usersGraph[user.user_id];
        let { total } = usersGraph[user.user_id];

        if (!urls[user.uri]) {
          urls[user.uri] = { count: 1 };
          total++;
        } else {
          const url = urls[user.uri];
          url.count++;
        }

        usersGraph[user.user_id].urls = urls;
        usersGraph[user.user_id].total = total;
      }
    });

    return response.json({ data: usersGraph });
  }
}

export default new UserController();
