#include <iostream>
#include <vector>
#include <algorithm>

int main(){
  int T;
  std::cin >> T;
  
  int n, f_i, c_i;
  std::vector<int> c_par, c_impar;

  int fila;
  bool control;
  for (int i = 0; i < T; i++){
    std::cin >> n;
    control = true;
    for (int j = 0; j < n; j++){
      std::cin >> f_i >> c_i;
      if (j == 0) fila = f_i;
      if (f_i != fila) {
        control = false; break;
      }
      
      if (c_i%2 == 0) c_par.push_back(c_i);
      else c_impar.push_back(c_i);
    }

    std::sort(c_par.begin(), c_par.end()); 
    std::sort(c_impar.begin(), c_impar.end());

    if (!c_par.empty() 
    && !c_impar.empty() 
    && c_par[0]-c_impar[0] != 1){
      control = false;
    }

    for (int j = 1; j < c_par.size(); j++){
      if (c_par[j]-c_par[j-1] != 2){
        control = false; break;
      }
    }

    for (int j = 1; j < c_impar.size(); j++){
      if (c_impar[j]-c_impar[j-1] != 2){
        control = false; break;
      }
    }

    if (control) std::cout << "SI" << std::endl;
    else std::cout << "NO" << std::endl;
  }
}