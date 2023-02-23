var accsessors = {
    '.': ['.', ''],
    '[]': ['[', ']'],
    '{}': ['{', '}'],
};
var defaultSerializeOptions = {
    skipNull: true,
    skipUndefined: true,
    arrayAccsessor: '[]',
    objectAccsessor: '.'
};
export { accsessors, defaultSerializeOptions };
