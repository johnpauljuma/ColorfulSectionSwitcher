document.getElementById("header").style.backgroundColor="red";
document.getElementById("footer").style.backgroundColor="pink";
document.getElementById("child1").style.backgroundColor="purple";
document.getElementById("child2").style.backgroundColor="orange";
document.getElementById("container").style.backgroundColor="orange";
function next()
{
    if(document.getElementById("header").style.backgroundColor=="red" )
    {
        document.getElementById("header").style.backgroundColor="orange";
        document.getElementById("footer").style.backgroundColor="red";
        document.getElementById("child1").style.backgroundColor="pink";
        document.getElementById("child2").style.backgroundColor="purple";
        document.getElementById("container").style.backgroundColor="purple";
    }
    else if(document.getElementById("header").style.backgroundColor=="orange" )
    {
        document.getElementById("header").style.backgroundColor="purple";
        document.getElementById("footer").style.backgroundColor="orange";
        document.getElementById("child1").style.backgroundColor="red";
        document.getElementById("child2").style.backgroundColor="pink";
        document.getElementById("container").style.backgroundColor="pink";
    }
    else if(document.getElementById("header").style.backgroundColor=="purple" )
    {
        document.getElementById("header").style.backgroundColor="pink";
        document.getElementById("footer").style.backgroundColor="purple";
        document.getElementById("child1").style.backgroundColor="orange";
        document.getElementById("child2").style.backgroundColor="red";
        document.getElementById("container").style.backgroundColor="red";
    }
    else{
        document.getElementById("header").style.backgroundColor="red";
        document.getElementById("footer").style.backgroundColor="pink";
        document.getElementById("child1").style.backgroundColor="purple";
        document.getElementById("child2").style.backgroundColor="orange";
        document.getElementById("container").style.backgroundColor="orange";
    }
}
function Previous()
{
    if(document.getElementById("header").style.backgroundColor=="orange" )
    {
        document.getElementById("header").style.backgroundColor="red";
        document.getElementById("footer").style.backgroundColor="pink";
        document.getElementById("child1").style.backgroundColor="purple";
        document.getElementById("child2").style.backgroundColor="orange";
        document.getElementById("container").style.backgroundColor="orange";
    }
    else if(document.getElementById("header").style.backgroundColor=="purple" )
    {
        document.getElementById("header").style.backgroundColor="orange";
        document.getElementById("footer").style.backgroundColor="red";
        document.getElementById("child1").style.backgroundColor="pink";
        document.getElementById("child2").style.backgroundColor="purple";
        document.getElementById("container").style.backgroundColor="purple";
    }
    else if(document.getElementById("header").style.backgroundColor=="pink" )
    {
        document.getElementById("header").style.backgroundColor="purple";
        document.getElementById("footer").style.backgroundColor="orange";
        document.getElementById("child1").style.backgroundColor="red";
        document.getElementById("child2").style.backgroundColor="pink";
        document.getElementById("container").style.backgroundColor="pink";
    }
    else{
        document.getElementById("header").style.backgroundColor="pink";
        document.getElementById("footer").style.backgroundColor="purple";
        document.getElementById("child1").style.backgroundColor="orange";
        document.getElementById("child2").style.backgroundColor="red";
        document.getElementById("container").style.backgroundColor="red";
    }
}