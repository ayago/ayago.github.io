class SearchService {
    searchTheNet(textVal, numberVal){
        return new Promise((resolve, reject) => {
            
            if(numberVal != 404){
                setTimeout(() => {
                    resolve({
                        timestamp: new Date(),
                        textVal: textVal,
                        numberVal: numberVal
                    });
                }, 200)
            }else 
                reject("Search not found. Error code: 404")
        });
    }
}

export {SearchService}