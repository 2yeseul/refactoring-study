# 리팩터링 원칙

## 리팩터링 정의
**명사** 와 **동사** 모두 사용 가능하다.
### 명사일 때?
> 소프트웨어의 겉보기 동작은 그대로 유지한 채, 코드를 이해하고 수정하기 쉽도록 내부 구조를 변경하는 기법
- **함수 추출하기**
- **조건부 로직 다형성으로 변경**
### 동사일 때?
> 소프트웨어의 겉보기 동작은 그대로 유지한 채, 여러 가지 리팩터링 기법을 적용해서 소프트웨어를 재구성

## 리팩터링하는 이유
**소프트웨어 설계가 좋아짐**

리팩터링 하지 않으면 소프트웨어 내부 설계가 썩기 쉽다. 내부 품질이 뛰어난 코드 베이스는 새 기능 구축을 돕는 견고한 토대가 된다.
처음부터 좋은 설계를 마련하는 것은 어렵고, 빠른 개발이라는 목표 달성을 위해서 리팩터링은 필수이다.

## 언제 리팩터링 할까?

### 3의 법칙?
1. 처음엔 그냥 한다.
2. 비슷한 일을 두 번째로 하게 되면(중복이 생겨 당황스럽겠지만).. 그래도 계속 일단 한다.
3. 비슷한 일을 세 번쨰 하게 되면 리팩터링 한다.

### 👷 준비를 위한 리팩터링: 기능을 쉽게 추가하게 만들기
리팩터링하기 가장 좋은 시점은 코드 베이스에 기능을 새로 추가하기 직전이다. 
1. 현재 코드를 살피며
2. 구조를 살짝 바꾸면 다른 작업을 하기가 훨씬 쉬워질 만한 부분을 찾는다.

### 👷 이해를 위한 리팩터링: 코드를 이해하기 쉽게 만들기
코드를 수정하기 위해선 먼저 그 코드가 하는 일을 파악해야한다.
- 어떤 역할을 하는지 이해된 변수 to 적절한 이름으로 변경해주기
- 긴 함수 -> divide
