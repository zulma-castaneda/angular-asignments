export class CounterService{
  activeToInactiveCounter = 0
  inactiveToActiveCounter =0

  onActivated(){
    this.inactiveToActiveCounter++
    console.log('inactiveToActiveCounter',this.inactiveToActiveCounter)
  }

  onInactivated(){
    this.activeToInactiveCounter++
    console.log('activeToInactiveCounter',this.activeToInactiveCounter)
  }
}
