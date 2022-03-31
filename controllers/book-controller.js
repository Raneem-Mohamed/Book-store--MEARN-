const Book=require("../model/Book")


const getAllBooks =async (req,res,next) =>{
    let books;

     try{
         books= await Book.find(); 
     } catch (err){
         console.log(err); 
     }

     if(!books){
         return res.status(404).json({message:"No product found"})
     }
     return res.status(200).json({books})
}

const getById=async(req,res,next) =>{
    const id = req.params.id
    let book;

    try{
        book=await Book.findById(id);
    }catch(err)
    {
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message:"No book found"})
    }
    return res.status(200).json({book})
}

const addBook = async (req,res,next) =>{

    const {name,outhor,description,price,available,image}=req.body
    let book;
    
    try{

        book = new Book ({
            name,
            outhor,
            description,
            price,
            available,
            image,
        })
        await book.save();
    }catch(err){
        console.log(err);
    }

    if(!book){

        return res.status(500).json({message:'Unable to add'})
    }

    return res.status(201).json({ book })
    
}

const UpdateBook=async(req,res,next) =>{
    const id= req.params.id;
    const {name,outhor,description,price,available,image}=req.body
    let book;

    try{

        book= await Book.findByIdAndUpdate(id,{
            name,outhor,description,price,available,image
        })

        book=await book.save()

    }catch(err){
        console.log(err);
    } 

    if(!book){

        return res.status(404).json({message:'Unable to update by this id'})
    }

    return res.status(200).json({ book })

}

const deleteBook = async (req, res,next) =>{
    const id = req.params.id

    let book;

    try{

        book=await Book.findByIdAndRemove(id)
    }catch(err){

        console.log(err);
    }

    if(!book){

        return res.status(404).json({message:'Unable to delete by this id'})
    }

    return res.status(200).json({ message:'this book successfuly deleted' })

}



exports.getAllBooks=getAllBooks;
exports.addBook=addBook;
exports.getById=getById;
exports.UpdateBook=UpdateBook;
exports.deleteBook=deleteBook;