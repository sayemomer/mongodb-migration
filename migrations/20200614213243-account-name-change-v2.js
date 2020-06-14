module.exports = {
  async up(db, client) {
    const user = await db.collection('accounts').find({}).toArray();
    console.log(user)
    user.forEach(async element => {

      let { firstName , lastName } = element ;
      const name = firstName + ' ' + lastName + ' ' + Date.now();
      await db.collection('accounts').updateOne({_id : element._id},{$set : {'name' : name}})
    });
  },

  async down(db, client) {
    const user = await db.collection('accounts').find({}).toArray();
    console.log(user)
    let i = 1 ;
    user.forEach(async (element,index) => {

      let { firstName , lastName } = element ;
      const name = firstName + '-' + lastName + index;
      await db.collection('accounts').updateOne({_id : element._id},{$set : {'name' : name}})
      index;
    });
  }
};