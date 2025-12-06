function filterGifts(gifts: string[]): string[] {

  const giftflawless:string[] = gifts.filter((value) => value.split("").includes("#") === false) 
  
  return giftflawless
}


const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)