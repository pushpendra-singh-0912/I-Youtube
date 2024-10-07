import React from 'react'

const commentsData = [
    {
        name:"pushpendra singh",
        text:"you only live once",
        reply:[
            {
                name:"pushpendra singh",
                text:"you only live once",
                reply:[
                    {
                        name:"pushpendra singh",
                        text:"you only live once",
                        reply:[
                            
                        ]
                    },
                    {
                        name:"pushpendra singh",
                        text:"you only live once",
                        reply:[
                            
                        ]
                    },
                ]
            },
            {
                name:"pushpendra singh",
                text:"you only live once",
                reply:[
                    
                ]
            },
            {
                name:"pushpendra singh",
                text:"you only live once",
                reply:[
                    {
                        name:"pushpendra singh",
                        text:"you only live once",
                        reply:[
                            
                        ]
                    },
                    {
                        name:"pushpendra singh",
                        text:"you only live once",
                        reply:[
                            
                        ]
                    },
                    {
                        name:"pushpendra singh",
                        text:"you only live once",
                        reply:[
                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"pushpendra singh",
        text:"you only live once",
        reply:[
            
        ]
    },
    {
        name:"pushpendra singh",
        text:"you only live once",
        reply:[
            
        ]
    },
    {
        name:"pushpendra singh",
        text:"you only live once",
        reply:[
            
        ]
    },
    {
        name:"pushpendra singh",
        text:"you only live once",
        reply:[
            
        ]
    },

    
]


const Comment = ({data})=>{
    const {name,text,reply} = data;
    return(
        <div className='flex p-2 w-[65rem]'>
             <img className='h-7 w-7 my-3 ' src='https://cdn-icons-png.flaticon.com/512/9187/9187604.png'></img>
             <div className='m-2'>
             <h1 className='mx-1 my-auto'>{name}</h1>
             <h3 className='px-2' >{text}</h3>
             <hr className='w-[60rem] my-2' ></hr>
             </div>
        </div>

    )
}

const CommentList = ({comments})=>{
    return  comments.map((comment,index)=>(
        <div key={index}>
            <Comment  data={comment}/>
            <div className='mx-14 border border-l-black'>
            <CommentList comments={comment.reply } />
           
            </div>

        </div>
        
    
    
    
    
    ))
   
}

const CommentsContainer = () => {

    
  return (
    <div className='m-2 p-2w-[65rem]' >
        <h1>Comments</h1>
       <CommentList comments={commentsData} />
    </div> 
  )
}

export default CommentsContainer