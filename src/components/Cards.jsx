import Card from "./Card"
const Cards = () => {
    return (
        <>
            {dataArr.length && dataArr.map(function (item) {
                return (
                    <div key={item.index}>
                        < Card props={item} />
                    </div>
                )
            })}
        </>
    )
}
export default Cards
const dataArr = [{
    index: 1,
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    brandName: "Nike",
    titleName: "Nike Air Max 21A",
    reviews: "4 reviews",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandaeneque adipisci eum enim, natus illo inventore totam?",
    shoeColor: "Color",
    shoeSize: ["8 UK", "9 UK", "10 UK"],
    price: "₹24566",
    btntext: "Add To Cart"
},
{
    index: 2,
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    brandName: "Nike",
    titleName: "Nike Air Jordan 21H",
    reviews: "8 reviews",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandaeneque adipisci eum enim, natus illo inventore totam?",
    shoeColor: "Color",
    shoeSize: ["6 UK", "8 UK", "10 UK"],
    price: "₹298988",
    btntext: "Add To Cart"
}
]