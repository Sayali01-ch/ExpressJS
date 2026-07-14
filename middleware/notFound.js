const notFound =(req,res,next)=>
{
    const error =new Error('Not Found');
    error.ststus=404;
    next(error);

};
export default notFound;