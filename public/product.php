<?
    $data = [
        [
            'id_product' => 1,
            'title' => 'iPhone 5',
            'price' => 10000, 
        ],
        [
            'id_product' => 2,
            'title' => 'iPhone 6',
            'price' => 20000, 
        ],
        [
            'id_product' => 3,
            'title' => 'iPhone 7',
            'price' => 35000, 
        ],
    ];
    
    echo json_encode($data);
?>