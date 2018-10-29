// safe-box.js
var safeBox;

(function (){
    var name;
    var surname;
    var username;
    var password;
    safeBox = {
        saveData: function(_name, _surname, _username, _password, _repeatPass, onSuccess, onFail) {
            var count=0, arr=[];

            if(typeof _password !== 'string'){ arr[count]=_password+' is not a valid password'; count++;}
            else{
                if(!_password || !(_password.trim().length>=8))  {arr[count]=("Password must be set and it has to have a minum of 8 characters"); count++;}
                    if((_password).match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)!==null || !isNaN(_password))  {
                        arr[count]=('Your password can not contain numbers'); count++;
                    }
                    if((_password).match(/[$-/:-?{-~!“^_`\[\]]/)!==null){
                        arr[count]='Your password can not contain symbols'; count++;
                    }
            }
            
            if(typeof _repeatPass !== 'string'){ arr[count]=_repeatPass+' is not a valid password'; count++;}
            else{
                if(!_repeatPass || !(_repeatPass.trim().length>=8))  {arr[count]=("Repeat the password please. Remeber it has to have a minum of 8 characters"); count++;}
                if((_repeatPass).match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) || !isNaN(_repeatPass))  
                {arr[count]=('Your password can not contain numbers'); count++;}
                if((_repeatPass).match(/[$-/:-?{-~!“^_`\[\]]/)!==null){
                    arr[count]='Your password can not contain symbols'; count++;
                }
            }

            if(typeof _name !== 'string'){ arr[count]=_name+' is not a valid name'; count++;}
            else{
                if(!_name || !_name.trim().length)  {arr[count]=("Name must be set"); count++;}
                if((_name).match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) || !isNaN(_name))  
                {arr[count]=('Your name can not contain numbers'); count++;}
                if((_name).match(/[$-/:-?{-~!“^_`\[\]]/)!==null){
                    arr[count]='Your name can not contain symbols'; count++;
                }
            }

            if(typeof _surname !== 'string'){ arr[count]=_surname+' is not a valid surname'; count++;}
            else{
                if(!_surname || !_surname.trim().length)  {arr[count]=("Surname must be set"); count++;}
                if((_surname).match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) || !isNaN(_surname))  
                {arr[count]=('Your surname can not contain numbers'); count++;}
                if((_surname).match(/[$-/:-?{-~!“^_`\[\]]/)!==null){
                    arr[count]='Your surname can not contain symbols'; count++;
                }
            }

            if(typeof _username !== 'string'){ arr[count]=_username+' is not a valid username'; count++;}
            else{
                if(!_username || !_username.trim().length)  {arr[count]=("Username must be set"); count++;}
                if((_username).match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) || !isNaN(_username))  
                {arr[count]=('Your username can not contain numbers'); count++;}
                if((_username).match(/[$-/:-?{-~!“^_`\[\]]/)!==null){
                    arr[count]='Your username can not contain symbols'; count++;
                }
            }

            if(_password!==(_repeatPass)){ arr[count]='Password must be the same in both fields'; count++}

            if(!onSuccess instanceof Function) { arr[count]=onSuccess+' is not a valid function'; count++}
            if(!onFail instanceof Function) { arr[count]=onFail+' is not a valid function'; count++}


            if(count>0){
                onFail(arr);
            }else{
                username=_username;
                name=_name;
                surname=_surname;
                password=_password;
                onSuccess(true);
            }          
        },
        checkData: function(_password, _username, onSuccess, onFail) {
            var arr=[], count=0;
            // TODO

            if(!_password && password!==_password){
                arr[0]=("Password is not correct");
            }
            else if(_username && _username===username){
                onSuccess(name, surname, username);
            }else{
                arr[0]=("Password/Username is not correct");
                onFail(arr);
            }
        }
    }
    return safeBox;
})();



