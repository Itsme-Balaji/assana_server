const mongoose = require("mongoose");


const ProductsSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,
    
    productCommonHeading:String,

    product1:String,
    productName1:String,    
    productPara1:String,
    productPrice1:String,  
    productLink1:String,  

    
    product2:String,
    productName2:String,    
    productPara2:String,
    productPrice2:String, 
    productLink2:String,  


    product3:String,
    productName3:String,    
    productPara3:String, 
    productPrice3:String, 
    productLink3:String,  


    product4:String,
    productName4:String,       
    productPara4:String,
    productPrice4:String, 
    productLink4:String,  


    product5:String,
    productName5:String,    
    productPara5:String,
    productPrice5:String, 
    productLink5:String,  





    // Image fields
    productBannerImg: String,
    productImg1: String,
    productImg2: String,
    productImg3: String,
    productImg4: String,
    productImg5: String,







  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.Products ||
  mongoose.model("Products", ProductsSchema);
