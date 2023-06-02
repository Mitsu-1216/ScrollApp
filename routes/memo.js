router.get('/task', function (req, res, next) {
    const modify_taskid = req.query.modify_taskid;
    const modify_task = req.query.modify_task;
    const modify_date = req.query.modify_date;
    const modify_time = req.query.modify_time;
  
    // やることアップデート
    knex("tasks")
      .where({ "id": modify_taskid })
      .update({ content: modify_task, date: modify_date, time: modify_time })
      .then(function () {
          // やること一覧用のデータを取得
          knex("tasks")
            .where({ "user_id": userId })
            .select("*")
            .orderBy('date', 'asc')
            .orderBy('time', 'asc')
            .then(function (results) {
              res.render('index', {
                results: results,
              });
            })
      })
      .catch(function (err) {
        console.error(err);
        res.render('index', {
        });
      });
  });