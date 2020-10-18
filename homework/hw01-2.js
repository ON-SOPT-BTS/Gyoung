const sopt_members = [{
    name: "김정재",
    location: "김포",
    age: "OB",
    hobby: "넷플릭스",
    info: "넷플릭스 봅니다~"
},
{
    name: "김가영",
    location: "Seoul",
    age: "24",
    hobby: "공부",
    info: "공부해요~"
},
{
    name: "김현기",
    location: "Seoul",
    age: "27",
    hobby: "맥주",
    info: "술마셔요~"
},
{
    name: "안재은",
    location: "Seoul",
    age: "24",
    hobby: "독서",
    info: "책읽어요~"
},
{
    name: "임찬기",
    location: "Seoul",
    age: "25",
    hobby: "술마시기",
    info: "술술술~"
},
{
    name: "최선욱",
    location: "Seoul",
    age: "24",
    hobby: "스쿼시",
    info: "스쿼시 합니다"
}];

const printFunc = (members) => {members.filter((member) => console.log(`이름 : ${member.name}, 사는 곳 : ${member.location}, 나이: ${member.age}, 취미 : ${member.age}, 정보 : ${member.info}`))};

printFunc(sopt_members);