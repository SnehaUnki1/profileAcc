import React from 'react'
import '../assets/pages.css'
import '../assets/work.css'
import WorkData from './WorkData';

export default function Work() {

    const openLink = function (link) {
        if(link){
            window.open(link)
        } else {
        alert("Sorry Link is Not provided...")
        }
    }
  
    return (
        <div className="work">
            <div className="headline">Projects</div>
            <div className="container">
                {
                    WorkData.map((item, key) => {
                        return (
                            <div className="card" key={key}>
                                <div className="front">
                                    
                                    <img alt="profile" src={item.image} />
                                </div>

                                <div className="back">
                                    <div className="back-content middle">
                                        <h2>{item.description}</h2>
                                        <h3>{item.Technologies}</h3>
                                        <div  className="row links text-center btn-group">
                                            
                                            <button className="btn btn-md btn-outline-info" onClick={()=>openLink(item.gitLink)}>{item.gitIcon}</button>
                                            <button className="btn btn-md btn-outline-info" onClick={()=>openLink(item.siteLink)}>{item.siteIcon}</button>
                                           
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}
