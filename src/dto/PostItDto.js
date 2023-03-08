class PostItDto {
    postItId;
    content;
    createdTime;
    isDone;

    constructor(data) {
        this.postItId = data.postItId;
        this.content = data.content;
        this.createdTime = data.createdTime;
        this.isDone = data.isDone;
    }
}

export default PostItDto;