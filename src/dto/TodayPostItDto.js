class TodayPostItDto {

    content;
    imgUrl;

    constructor(data) {
        this.content = data.content;
        if (data.imgUrl !== undefined) {
            this.imgUrl = data.imgUrl;
        } else {
            this.imgUrl = 'ic_quick_postit_ex.png';
        }
    }

}