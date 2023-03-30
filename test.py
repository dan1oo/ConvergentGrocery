import openfoodfacts
milk = '0742365264450'
chocky = '0818290017031'
product1 = openfoodfacts.products.get_product(milk)
product2 = openfoodfacts.products.get_product(chocky)


print(product1['product']['ecoscore_score'])

print(product1['product']['ecoscore_grade'])


for x in product2['product']:
    pass
print(product2['product']['ecoscore_score'])
print(product2['product']['ecoscore_grade'])