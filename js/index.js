/**
 * Created by dcq on 2016/10/02/0023.
 */
var app=angular.module('weibo',[]);
app.controller('main',function($scope,$http){

    var pageCount=0;
    var page=1;
    var pageSize=6;
    var tempArr=[];

    $scope.faceInfo=null;
    $scope.hotTopic=null;
    $scope.list=null;

    $http.get('/js/weibodata.txt').success(function(res){
        $scope.faceInfo=res.faceInfo;
        $scope.hotTopic=res.hotTopic;
        $scope.list=res.list;
        pageCount=Math.ceil(($scope.hotTopic.length)/pageSize);
        for(var i=0;i<$scope.hotTopic.length;i++){
            tempArr[i]=$scope.hotTopic[i];
        }
        $scope.arr=$scope.hotTopic.splice((page-1)*pageSize,pageSize);
        for(var i=0;i<tempArr.length;i++){
            $scope.hotTopic[i]=tempArr[i];
        }
    }).error(function(err){
        console.log('错误：'+err);
    });

    $scope.change=function(){
        page++;
        if(page>pageCount){
            page=1;
        }
        $scope.arr=[];
        $scope.arr=$scope.hotTopic.splice((page-1)*pageSize,pageSize);
        for(var i=0;i<tempArr.length;i++){
            $scope.hotTopic[i]=tempArr[i];
        }
    }
});