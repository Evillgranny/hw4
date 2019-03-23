var obj = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AS': 'American Samoa',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware'
};
var newObj = {}
for (var key in obj) {
    newObj[obj[key]]=key;
}
console.log(newObj)
