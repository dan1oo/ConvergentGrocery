

import openfoodfacts


class UserScore:


    milk = '0742365264450'
    chocky = '0818290017031'
    pomme = '3175681851849'
    product1 = openfoodfacts.products.get_product(milk)
    product2 = openfoodfacts.products.get_product(chocky)
    product3 = openfoodfacts.products.get_product(pomme)
    
    def __init__(self, name) :
        self.name = name
        self.currProducts = dict()
        self.size = 0
        self.currScore = 0

    # print(product1['product']['ecoscore_score'])

    # print(product1['product']['ecoscore_grade'])

    

    # for x in product2['product']:
    #     pass
    # print(product2['product']['ecoscore_score'])
    # print(product2['product']['ecoscore_grade'])
    def addProduct(self, barcode):
        product = openfoodfacts.products.get_product(barcode)
        if not product:
            print(f"Invalid barcode: {barcode}")
            return
        productScore = product['product']['ecoscore_score']
        self.currProducts.setdefault(barcode, 1)
        if self.currProducts.get(barcode) > 1:
            self.currProducts[barcode] += 1
        self.size += 1
        self.currScore += (productScore / self.size)

    def getCurrScore(self):
        return self.currScore

    def getSize(self):
        return self.size

    def getCurrProducts(self):
        return self.currProducts

    def reset(self):
        self.size = 0
        self.currScore = 0
        self.currProducts = dict()

    def getName(self):
        return self.name

    def printInfo(self):
        print(self.currScore)
        print(self.currProducts)
        print(self.size)


class Runner:

    @staticmethod
    def main():
        michael = UserScore("Michael")
        michael.addProduct('0742365264450')
        michael.printInfo()
        michael.reset()
        michael.printInfo()


if __name__ == '__main__':
    Runner.main()