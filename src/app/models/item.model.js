module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      title: String,
      imgSrc: String,
      price: Number,
      description: String
    },
    { timestamps: true }
  );

  schema.method('toJSON' , () =>{
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  
  const Item = mongoose.model('item' , schema);
  return Item;
};


