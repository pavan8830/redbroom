// JavaScript Document
(function(){
  var app = angular.module('blogApp',[]);
  
  app.controller('BlogController', ['$http','$scope', function($http,$scope){
    
    var blog = this;
    $scope.blog.title = "";
    
    $scope.blog.posts = [];
	 
	$scope.limitM = 10;
	 
    $http.get('http://redbroommevents.org/pavan.json').success(function(data){
      $scope.blog.posts = data;
    });
	
	  
    
  blog.tab = 'blog';
    
blog.selectTab = function(setTab){
    blog.tab = setTab;
      console.log(blog.tab);
    };
    
   blog.isSelected = function(checkTab){
      return $scope.blog.tab === checkTab;
    };
    
    blog.post = {};

    blog.addPost = function(){
      blog.post.createdOn = Date.now();
      blog.post.comments = [];
      blog.post.likes = 0;
      blog.posts.unshift(this.post);
      blog.tab = 0;
      blog.post ={};
    };   
    
  }]);
  
  app.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
      this.comment.createdOn = Date.now();
      post.comments.push(this.comment);
      this.comment ={};
    };
  });
 
})();