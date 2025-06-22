let prompCommit = prompt('enter')

const replaceCommit = (com) => {
    console.log(com.replaceAll(/((<!--)|(-->))/g, ''));
}

replaceCommit(prompCommit)









