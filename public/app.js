const showModal = function (e) {
    e.preventDefault();
    $('.modal-container').show();
}

const hideModal = function (e) {
    e.preventDefault();
    $('.modal-container').hide();
}
const saveTweet = function (e) {
    e.preventDefault();
    const inputTweet = $('#tweetmaker').val();
    $('#tweetmaker').val('')
    hideModal(e);

    const tweetData = {
        tweet: inputTweet,
        userName: 'Prince Zuko',
    }
    $.post('/api/tweet', tweetData)
        .then(function (data) {
            console.log(data);
            render(data)
        })

}

const render = function (tweetText) {
    $('.center-feed').append(` <div> <div class=tweetmain>
        <img id="profile2" src="https://vignette.wikia.nocookie.net/avatar/images/4/4b/Zuko.png/revision/latest?cb=20180630112142"
            alt="picture of me" height="50px" width="50px" />
            <i data-id=${tweetText._id} id='delete' class="fas fa-trash-alt"></i>
        <h1 class='identity2'>Prince Zuko</h1> <span class='tag'> @Zuko Oct 2018</span>

        <p class='tweets'>${tweetText.tweet} </p> 
        </div>

    </div>`)
}

$('.center-feed').on('click', '#delete', function () {
    const id = $(this).data('id')
    $.ajax({
            method: 'delete',
            url: `/api/tweet/${id}`

        })
        .then(getTweet());
    //setTimeout("location.reload(true);", 100);
})
$('#newTweet').on('click', showModal);
$('.close-modal').on('click', hideModal);
$('#tweetpost').on('click', saveTweet);



const getTweet = function () {
    $('.center-feed').empty()
    $.get('/api/tweet')
        .then(function (serverData) {
            for (let i = 0; i < serverData.length; i++) {
                render(serverData[i]);
            }
        })
}

getTweet();

// (function ($) {
//     $(document).on('ready', getTweet);
// })();

// $.delete('/api/tweet')
//     .then(function (serverData) {
//         for (let i = 0; i < serverData.length; i++) {
//             splice(serverData[i].id, 1);
//         }
//     })