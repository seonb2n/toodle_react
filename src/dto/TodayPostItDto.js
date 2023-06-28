class TodayPostItDto {

    content;
    imgUrl;

    constructor({imgUrl, content}) {
        // console.log(imgUrl);
        // console.log(content);
        this.content = content;
        if (imgUrl !== undefined) {
            this.imgUrl = imgUrl;
        } else {
            this.imgUrl = 'ic_quick_postit_ex.png';
        }
    }

}

export default TodayPostItDto;