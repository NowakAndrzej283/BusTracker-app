export const fetchSchedule = async () => {
    let response;
    

    const url = `https://www.ztm.poznan.pl/pl/dla-deweloperow/getGTFSFile`
    
    response = await fetch(url);
  
    if(!response || response.length === 0){
      throw new Error('No weather data returned');
    }
  
    console.log('RESPONSES', response);
    const blob = await response.blob();
  
    console.log('The api response is: ', blob);
    
    return blob;
  };
  
  
  
  