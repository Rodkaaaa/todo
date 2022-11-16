lista=[]
b=1
a=int(input("ingrese entre 10 a 20 numeros (presione 0 para finalizar): "))
lista.append(a)#[1] a = 1
while True:
    if a== 11:
        print("chupalo entonces")
        a=int(input("ingrese el siguiente numero: "))
        lista.append(a)#[1,4] a
        b = b+1
        print(b)
        if a == 0:
            if b < 10:
                a=int(input("numeros insuficientes, porfavor ingrese otro numero: "))
                lista.append(a)
                b = b
                print(b)
            if b >20:
                print("supero el limite de numeros porfavor vuelva a comenzar: ")
                break

            elif b >= 10 and b <= 20:
                ordenados = sorted(lista)
                print(ordenados)
                break
            