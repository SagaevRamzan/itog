import Card from "./Card";
import {useState} from "react";


function Content(props) {

    const database = [
        {
            id: 1,
            name: "MacBook",
            price: 100000,
            bought: false,
            rating: 5,
            image: "http://intocode.ru/d/react-project-1/images/1.jpg"
        },
        {
            id: 2,
            name: "Galaxy",
            price: 35999,
            bought: false,
            rating: 4,
            image: "http://intocode.ru/d/react-project-1/images/2.jpg"
        },
        {
            id: 3,
            name: "Скутер",
            price: 65500,
            bought: false,
            rating: 5,
            image: "http://intocode.ru/d/react-project-1/images/3.jpg"
        },
        {
            id: 4,
            name: "Монитор Samsung",
            price: 12000,
            bought: false,
            rating: 3,
            image: "http://intocode.ru/d/react-project-1/images/4.jpg"
        },
        {
            id: 5,
            name: "Респераторная маска",
            price: 500,
            bought: false,
            rating: 5,
            image: "http://intocode.ru/d/react-project-1/images/5.jpg"
        },
        {
            id: 6,
            name: "Стиральная машина",
            price: 100000,
            bought: false,
            rating: 3,
            image: "http://intocode.ru/d/react-project-1/images/6.jpg"
        },
        {
            id: 7,
            name: "Белый холодильник",
            price: 43100,
            bought: false,
            rating: 5,
            image: "http://intocode.ru/d/react-project-1/images/7.jpg"
        },
        {
            id: 8,
            name: "Колонка",
            price: 3000,
            bought: false,
            rating: 4,
            image: "http://intocode.ru/d/react-project-1/images/8.jpg"
        },
        {
            id: 9,
            name: "Наушники",
            price: 1500,
            bought: false,
            rating: 5,
            image: "http://intocode.ru/d/react-project-1/images/9.jpg"
        }
    ]

     let [new_database,setNew_database]=useState(database.map(test))


    function test(item){
        return Card(item)
    }





    return (

        <div className="content">

            <Card image={database[0].image} name={database[0].name} price={database[0].price}/>
            <Card image={database[1].image} name={database[1].name} price={database[1].price}/>
            <Card image={database[2].image} name={database[2].name} price={database[2].price}/>
            <Card image={database[3].image} name={database[3].name} price={database[3].price}/>
            <Card image={database[4].image} name={database[4].name} price={database[4].price}/>
            <Card image={database[5].image} name={database[5].name} price={database[5].price}/>
            <Card image={database[6].image} name={database[6].name} price={database[6].price}/>
            <Card image={database[7].image} name={database[7].name} price={database[7].price}/>
            <Card image={database[8].image} name={database[8].name} price={database[8].price}/>

        </div>

    )
}
export default Content;