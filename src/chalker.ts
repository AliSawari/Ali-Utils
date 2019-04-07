import * as chalk from 'chalk'
/** 
* @author AliSawari <github.com/AliSawari>
* @description This module is just a syntactic sugar for the module chalk
* @license MIT
* @example chalker('red','bgWhite')('Hello', 'World')
**/
export default function chalker():Function {
  // let args:string[] = arguments
  let chain:string[] = ['chalk']
  let args:string[] = []
  for(let x in arguments){
    args.push(arguments[x])
  }

  args.map((a:string) => {
    if(chalk[a]){
      chain.push(a)
    } else {
      console.log(chalk['yellow'](`'${a}' is not defined in chalk`));
    }
  })

  let newChain:string = chain.join('.')

   return function(): void {
    let kargs:string[] = []
    for(let x in arguments){
      kargs.push(arguments[x])
    }
    let pet:string = `('${kargs[0]}'`
    const kargs_len:Number = kargs.length
    for(let i=1; i<kargs_len; i++){
        pet += `,'${kargs[i]}'`
    }
    newChain += pet + ')'
    return eval(newChain)
  }
}
