const Item = require("../DB/models/items.models");


//GET All Items
const getAllItem=async(req,res)=>{

  try {
      const items = await Item.find({}).select("-createdAt -updatedAt -__v");
      return res.status(200).json({ success: true,respond:{ msg: 'Items retrieved successfully', data: items} });
  } catch (error) {
      console.log(error.message)
      return   res.status(500).json({ success: false, respond: { error: "server Error"} });
    }
}

//GETting an item by id
const getItemById=async(req,res)=>{

  try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ success: false, respond: 'Item not found' });
      }
      const  result={
        ...item._doc,total_price:item.item_quantity*item.item_price
      }
      return  res.status(200).json({ success: true, respond: result });
   } catch (error) {
      console.log(error.message)
      return  res.status(500).json({ success: false, respond: { error: "server Error"} });
    }
}

//patching an item
const patchItemById=async(req,res)=>{
  try {
    const item = await Item.findById(req.params.id);
    if(!item){
      return res.status(404).json({ success: false, respond: 'Item not found' });
    }
    if (req.body.price_per_item) {
      item.price_per_item = req.body.price_per_item;
    }
    if (req.body.item_quantity) {
      item.item_quantity = req.body.item_quantity;
    }
    const updatedItem = await item.save();
    //const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });

   return res.status(200).json({ success: true, respond: updatedItem });
    
  }catch (error) {
    console.log(error.message)
   return res.status(500).json({ success: false, respond: { error: "server Error"} });
  }
}

//Delete Item
const deleteItemById=async(req,res)=>{
  try {
    const deletedItem = await Item.findByIdAndRemove(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ success: false, respond: 'Item not found' });
    }
    return res.status(200).json({ success: true, respond:{ msg: 'Item deleted successfully'} });
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ success: false, respond: { error: error.message } });
  }
};
//Create Item
const createItem=async(req,res)=>{
  console.log({body:req.body})
  /* const item = new Item({
    item_name: req.body.item_name,
    item_quantity: req.body.item_quantity,
    //... till the end of the properties
  }) */
  try {
    const newItem = await Item.create(req.body);
    //const newItem = await item.save();
    return res.status(201).json({ success: true, respond:{msg:"Item created succefully",data:newItem} });
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ success: false, respond: { error: error.message } });
  }
};

module.exports={getAllItem,getItemById,patchItemById,deleteItemById,createItem}