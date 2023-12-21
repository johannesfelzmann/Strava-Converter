let base = document.getElementsByClassName("feed-ui")[0].querySelectorAll('div');

//let activities = new Map();

for (let i = 0; i < base.length; i++) {
    if (base[i].id.startsWith("feed-entry")){
        
        let allToConvert = base[i].querySelectorAll("[class^=------packages-ui-Stat-Stat-module__statValue]")
        console.log()
        for (j = 0; j < allToConvert.length; j++) {

            // convert distance
            let div = allToConvert[0].innerHTML;
            
            if (div.endsWith("> km</abbr>")) {
                let km = div.substring(0, div.indexOf("<"));
                let mi = Math.round((Number(km) * 0.621371) * 100) / 100;

                allToConvert[0].innerHTML =  mi + " mi";
            }

            // also convert pace
            let div2 = allToConvert[1]
            if(div2 !== undefined){
                div2 = div2.innerHTML;
                if (div2.endsWith("/km</abbr>")) {
                    let numstr = div2.substring(0, div2.indexOf("<"))
                    
                    let [minutes, seconds] = numstr.split(':').map(parseFloat);

                    const totalSecondsPerKm = (minutes * 60) + seconds;

                    const totalSecondsPerMile = totalSecondsPerKm * 1.60934;

                    const minPerMile = Math.floor(totalSecondsPerMile / 60);
                    const secPerMile = totalSecondsPerMile % 60;

                    allToConvert[1].innerHTML = minPerMile + ":" + Math.trunc(secPerMile) + " /mi"; 
                }
            }
            
        }

    }
    
}