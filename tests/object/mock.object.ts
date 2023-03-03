export default {
    id: '0001',
    type: 'donut',
    name: 'Cake',
    ppu: 0.55,
    batters: {
        batter: [
            { id: '1001', type: 'Regular' },
            { id: '1002', type: 'Chocolate' },
            { id: '1003', type: 'Blueberry' },
            { id: '1004', type: "Devil's Food" },
        ],
    },
    topping: [
        { id: '5001', type: 'None' },
        { id: '5002', type: 'Glazed' },
        { id: '5005', type: 'Sugar' },
        { id: '5007', type: 'Powdered Sugar' },
        { id: '5006', type: 'Chocolate with Sprinkles' },
        { id: '5003', type: 'Chocolate' },
        { id: '5004', type: 'Maple' },
    ],
    matrix: [
        ['1101', '1001', '110101', '11100', '01', '1100', '11'],
        ['110101', '1001', '110101', '11100', '11010', '1100', '0011'],
        ['0', '1011010101', '110101', '11100', '101001', '1100', '11'],
        ['101', '110101', '110101', '11100', '101001', '1100', '01010'],
        ['1101', '110101', '110101', '11100', '1010', '1100', '1010101'],
        ['1101101011', '1001', '110101', '11100', '01', '1100', '11'],
        ['110101', '1001', '110101', '11100', '01', '1100', '00101']
    ],
}
