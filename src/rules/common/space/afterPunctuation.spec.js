tests.push(['common/space/afterPunctuation', [
    ['Солнце садилось за горизонт,и поднялся ветер. Вот.', 'Солнце садилось за горизонт, и поднялся ветер. Вот.'],
    ['Солнце садилось за горизонт,и поднялся ветер!Вот.', 'Солнце садилось за горизонт, и поднялся ветер! Вот.'],
    ['Солнце садилось за горизонт,и поднялся ветер?Вот.', 'Солнце садилось за горизонт, и поднялся ветер? Вот.'],
    ['Солнце садилось за горизонт,и поднялся ветер??Вот.', 'Солнце садилось за горизонт, и поднялся ветер?? Вот.'],
    ['Солнце садилось за горизонт,?', 'Солнце садилось за горизонт,?'],
    ['Солнце садилось за горизонт1,и поднялся ветер?', 'Солнце садилось за горизонт1,и поднялся ветер?'],
    ['"Я!"', '"Я!"'],
    ['«Я!»', '«Я!»'],
    ['‹I!›', '‹I!›']
]]);
