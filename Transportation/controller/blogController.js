module.exports={
    index: (req, res, next)=> {
        res.render('index', { title: 'Admin blog' });
      },

      create: (req, res, next)=> {
        res.render('index', { title: 'Admin blog create' });
      },
      
      edit: (req, res, next)=> {
        res.render('index', { title: 'Admin blog edit' });
      },

      delete: (req, res, next)=> {
        res.render('index', { title: 'Admin blog delete' });
      },

      show: (req, res, next)=> {
        res.render('index', { title: 'Admin blog show' });
      },

      store: (req, res, next)=> {
        res.render('index', { title: 'Admin blog store' });
      },

      update: (req, res, next)=> {
        res.render('index', { title: 'Admin blog update' });
      },
      
}
