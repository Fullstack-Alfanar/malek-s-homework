

function malek(email){
    let c=0,dot=0;
    for(var i=0 ; i<email.length-1;i++){
        if(email[i]=='@')
            c++;
        if(c>0&&email[i]=='.')
            dot=i;
    }
    if(dot<email.length && dot !=0){
        return true;
    }
    return false;
}
