export const chunk = (arr: any[], chunkSize: number) => {
    return arr.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index / chunkSize);
        if(!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []) as any[][];
};