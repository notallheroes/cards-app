
import React, { useState } from "react"
import s from "./Card.module.css"
import likeEmpty from "./../common/likeEmpty.svg"
import likeAdd from "./../common/likeAdd.svg"


const Card = (props) => {

    const [like, setLike] = useState(false)

    const toggleLike = () => {
        setLike(() => {
            if (!like) {
                return true
            } else { return false }
        })
    }
    let address = props.card.attributes.address
    let attr = props.card.attributes
    let relation = props.card.relationships.attributes

    return (
        <div className={s.card}>
            <h1 className={s.title}>{attr.title}</h1>
            <div className={s.description}>
                <h2 className={s.area}>Площадь {attr.area}{attr.unit}</h2>
                <h2 className={s.address}>{address.city + " " + address.street + " " + address.house + "/" + address.room}</h2>
                <h2 className={s.relationships}>{relation.last_name} {relation.first_name} {relation.middle_name}</h2>
            </div>

            <div onClick={toggleLike} className={s.like}><img src={like === true ? (likeAdd) : (likeEmpty)} /></div>
        </div>
    )
}

export default Card