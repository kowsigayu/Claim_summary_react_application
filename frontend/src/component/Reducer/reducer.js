const initialstate = {
    empid: ' ',
    name: ' ',
    claimno: ' ',
    claimtype: ' ',
    claimprogram: ' ',
    startdate: ' ',
    enddate: ' '
};

const claimReducer = (state = initialstate, action) => {    
    const {type,payload} = action;
    switch (type) { 
        case 'UPDATE':    
            return {    
                ...state,  
                empid: payload.empid,
                name: payload.name,
                claimno: payload.claimno,
                claimtype: payload.claimtype,
                claimprogram: payload.claimprogram,
                startdate: payload.startdate,
                enddate: payload.enddate
            }     
        default:    
            return state;    
    }   
};    

export default claimReducer;