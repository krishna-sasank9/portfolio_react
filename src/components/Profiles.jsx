import React from 'react'

function Profiles() {
  return (
    <div id="profile">
        <h2>Profiles</h2>
        <section>
            <Card1 name={"Leetcode"} feedback={"Solved 450+ problems!"} url={"https://leetcode.com/K_sasank_9913/"}/>
            <Card2 name={"Codechef"} feedback={"Solved 250+ problems!"} url={"https://www.codechef.com/users/lucky_952004"}/>
            <Card3 name={"Github"} feedback={"View my projects here!"} url={"https://github.com/krishna-sasank9"}/>
        </section>
    </div>
  )
}
const Card1=({name,feedback,url})=>{
    return(
        <article>
            <img src='https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png' alt='LC'/>
            <h4>{name}</h4>
            <a href={url} target={"blank"}><button>View</button></a>
            <p>{feedback}</p>
        </article>
    )
}
const Card2=({name,feedback,url})=>{
    return(
        <article>
            <img src='https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb' alt='CC'/>
            <h4>{name}</h4>
            <a href={url} target={"blank"}><button>View</button></a>
            <p>{feedback}</p>
        </article>
    )
}
const Card3=({name,feedback,url})=>{
    return(
        <article>
            <img src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png' alt='GH'/>
            <h4>{name}</h4>
            <a href={url} target={"blank"}><button>View</button></a>
            <p>{feedback}</p>
        </article>
    )
}
export default Profiles