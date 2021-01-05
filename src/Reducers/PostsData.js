const UpdateComments=(state="",action)=>{
    switch(action.type){
        case 'UpdatePosts':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default UpdateComments;