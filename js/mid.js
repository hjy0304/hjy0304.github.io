function random(maxValue)
{
   day = new Date();
   hour = day.getHours();
   min = day.getMinutes();
   sec = day.getSeconds();
   return (((hour + 1) * (min + 1) * sec) % maxValue) + 1;
}
function pickSuit()
{
   suit = random(4);
   if(suit == 1)
      return "Spades";
   if(suit == 2)
      return "Clubs";
   if(suit == 3)
      return "Diamonds";
   return "Hearts";
}
function cardName(card)
{
   if(card == 1)
      return "Ace";
   if(card == 11)
      return "Jack";
   if(card == 12)
      return "Queen";
   if(card == 13)
      return "King";
   return "" + card;
}
function cardValue(card)
{
   if(card == 1)
      return 11;
   if(card > 10)
      return 10;
   return card;
}
function PickACard(strWho)
{
   card = random(13);
   suit = pickSuit();
   return cardValue(card);
}
function NewHand(form)
{
   form.dealer.value = 0;
   form.you.value = 0;
   form.dealer.value = eval(form.dealer.value) + PickACard("Dealer");
   form.you.value = eval(form.you.value) + PickACard("You");
}
function Dealer(form)
{
   while(form.dealer.value < 17)
   {
      form.dealer.value = eval(form.dealer.value) + PickACard("Dealer");
   }
}
function User(form)
{
   form.you.value = eval(form.you.value) + PickACard("You");
   if(form.you.value > 21)
   {
      alert("哈哈哈哈！！！你爆了！");
   }
}
function LookAtHands(form)
{
   if(form.dealer.value > 21)
   {
      alert("庄家爆了，恭喜你赢了");
   }
   else   if(form.you.value > form.dealer.value)
   {
      alert("你赢了!");
   }
   else
   if(form.dealer.value == form.you.value)
   {
      alert("Push!");
   }
   else
   {
      alert("庄家赢了!");
   }
}