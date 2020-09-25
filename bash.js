process.stdout.write('prompt >'); 

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); 

    if(cmd === 'pwd'){
       const pwd = require('./pwd.js')
       pwd()
    } else if (cmd === 'ls'){
        const ls = require('./ls.js')
        ls()
    } else if(cmd.startsWith('cat')){
        const cat = require('./cat.js')
        const fileName = cmd.slice(4);
        cat(fileName)
    } else if(cmd.startsWith('curl')){
        const curl = require('./curl.js')
        const webPage = cmd.slice(5); 
        curl(webPage)
    } else{

    done(cmd)
    }
})



function done(){
    process.stdout.write('You typed:' + cmd); 
    process.stdout.write('\nprompt >')
}