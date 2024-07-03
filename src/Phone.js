import Card from './Card.js'
function App(){
  const Products=[
    {img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJjUEPPAn7MGk4-Wdr7ZxnkK81_miGzfd_l03CAYVHEI-e_YhS7OeUVcQf9bbNsnhm_FazYfiDLWjfU9L9c-c4GDad0qxV14ZwaBv8rbzaX1aaxK2qqTaSv_AtcdgYDj0iSqaEJh0pB2Q&usqp=CAc",
      Name:'samsung',
      price:20000
    },{
      img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQ3cBuHe0wBp6_uuiL14rIoD_q28CXpMlcdULsM5V8Izs0d4VDItxkmMLPOG7rvy5DAzmZwtNUETgr4mqGABYi-wZy5wWKvxa2636McEE4wOjBJ2Zt4naMgzAbG_iDLX4wyHPCnbIg5cg&usqp=CAc',
      Name:'sone plus',
      price:21000
    },{
      img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBmwXo7QT0HQ6kJJDUPoti98GgDCtPqcNxZ4wdOQJHcIURwjilKv61dyBfePyxBbJZwxzMdTaINmKXgyd-mgoj-IZF3-jMgFE9jNmswrvO',
      Name:'google',
      price:25000
    },{
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_maQ-sZzNFrQjsMoKAm8OldhFTwxpd7W6yQ&s',
      Name:'Iphone',
      price:45000
    },{
      img:'https://m.media-amazon.com/images/I/71SgqjoTNzL.jpg',
      Name:'oppo',
      price:26000
    },{
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Bvucc1Y_cRhaCT4AU7aC5KM8iLO6126Vow&s',
      Name:'IQOO',
      price:30000
    }

  ]
  return(
    <div>{
      Products.map(function(product){
        return(
          <Card img={product.img}  Name= {product.Name} price= {product.price} />
        )

      } )
    }
    </div> 

  )
}
export default App;