function Like() {
  this.Likes = 0;

  this.LikeIt = function() {
    this.Likes++;
  };

  this.DisLikeIt = function() {
    this.Likes--;
  };
}

  var likes = new Like();

  console.log("Likes: " + likes.Likes);

  console.log("I'm gona like it +3 Likes");

  likes.LikeIt();

  likes.LikeIt();

  likes.LikeIt();

  console.log("Now Likes: " + likes.Likes );

  console.log("I'm gona DisLikeIt it -2 Likes");

  likes.DisLikeIt();

  likes.DisLikeIt();

  console.log("Now Likes: " + likes.Likes);
