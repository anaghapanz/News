const sportsApiurl=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=def0b69ae3364b26a352b291518399a1`;
window.fetch(sportsApiurl).then(data=>{
    data.json().then(sportsnews=>{
        console.log(sportsnews);
        let sportsData=sportsnews.articles;
        let output="";
        for(let sports of sportsData){
            output+=`
            
            <h1 class="h1title"><a href="${sports.url}" target==_black>${sports.title}</a></h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publishedAt}</p>
            `;
        }
        document.getElementById("left").innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err));
//time javascript here
setInterval(()=>{
    var time=new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
},1000);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Enturl=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=def0b69ae3364b26a352b291518399a1`;
window.fetch(Enturl).then(data=>{
    data.json().then(Ent=>{
        console.log(Ent);
        let entData=Ent.articles;
        let output="";
        for(let ente of entData){
            output+=`
            <h1 class="h1title"><a href="${ente.url}" target==_black>${ente.title}</a></h1>
            <p>${ente.description}</p>
            <img src="${ente.urlToImage}"/>
            <p>${ente.publishedAt}</p>
            `;
        }
        document.getElementById("right").innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err));
 

//top news headlines
const topheadlineApiUrl=`https://newsapi.org/v2/top-headlines?country=us&apiKey=def0b69ae3364b26a352b291518399a1`;
window.fetch(topheadlineApiUrl).then(data=>{
    data.json().then(topnews =>{
        console.log(topnews);
        let topheadData=topnews.articles;
        let output="";
        for(let tophe of topheadData){
            output+=`
            <h1 class="h1title"><a href="${tophe.url}"target==_black${tophe.title}</a></h1>
            <p>${tophe.description}</p>
            <img src="${tophe.urlToImage}"/>
            <p>${tophe.publishedAt}</p>
             `
        }
        document.getElementById("middle").innerHTML=output;
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));
 

