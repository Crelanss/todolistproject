import React from 'react'
import Cards from "./Cards";
import state from '../../../store/BreadCrumbsStore'
import {observer} from "mobx-react-lite";
import faceOne from '../../../backgroundPictures/face-one.png'
import faceTwo from '../../../backgroundPictures/face-two.png'
import faceThree from '../../../backgroundPictures/face-three.png'
import faceFour from '../../../backgroundPictures/face-four.png'
import faceFive from '../../../backgroundPictures/face-five.png'
import faceSix from '../../../backgroundPictures/face-six.png'

const CardsRender=observer(()=>{
    let x=true;
    switch (x) {
        case state.state["1"]:
            return(
                <Cards
                    text={'Без Todoist я в буквальном смысле не могу работать или справляться со всеми обязанностями полноценного родителя и супруга.'}
                    p={'Khoi Vihn'}
                    span={'Главный дизайнер в dobe'}
                    img={faceOne}
                />
            )
        case state.state["2"]:
            return(
                <Cards
                    text={'Разработчику полезно разбивать большие проекты на меньшие задачи, и Todoist для этих целей идеален.'}
                    p={'Tigran Hakobyan'}
                    span={'Старший инженер продукта в Buffer'}
                    img={faceTwo}
                />
            )
        case state.state["3"]:
            return(
                <Cards
                    text={'Я вела все свои учебные задачи в Todoist и в 2016 г. я первой из своей семьи получила степень бакалавра.'}
                    p={'Samantha Houston'}
                    span={'Разработчик'}
                    img={faceThree}
                />
            )
        case state.state["4"]:
            return(
                <Cards
                    text={'Todoist совершил революцию в том, как мы управляем своей небольшой компанией – он помог нам упростить проекты и следить за массой деталей.'}
                    p={'Trevor Stephens'}
                    span={'Генеральный менеджер Topline Builders'}
                    img={faceFour}
                />
            )
        case state.state["5"]:
            return(
                <Cards
                    text={'Todoist дал нам концентрацию, чтобы масштабировать компанию с 2 до 75 сотрудников, $12 млн венчурных инвестиций и 350+ довольных корпоративных клиентов.'}
                    p={'Anna Montalenti'}
                    span={'CTO Parse.ly'}
                    img={faceFive}
                />
            )
        case state.state["6"]:
            return(
                <Cards
                    text={'Неправильный не я, неправильный весь этот мир.'}
                    p={'Kaneki Ken'}
                    span={'Гуль SSS-ранга'}
                    img={faceSix}
                />
            )
        default :
            break
    }

})

export default CardsRender