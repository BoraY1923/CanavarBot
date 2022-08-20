module.exports = {
    name: 'duke',
    description: "sends a random duke nukem quote",
    execute(message, args) {
      // Add here the messages you want to be displayed.
  const messages = [
    "https://cdn.discordapp.com/attachments/977500248459075604/977500604681302026/duke_nukem_quarantined.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977500698134581278/just_wiped.webm?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977501298079436830/I_Know_What_Sex_Is.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977501437724610611/DUKE_NUKEM_IDOLMASTER.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977502133664493598/Do_the_balls_go_in_the_condom_too_.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977502392524374047/DUKE_NUKEM_AT_A_FUNERAL-.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977502691339173888/POV__Duke_Nukem_is_inside_your_home.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977502873137086494/Oh_man....mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977507199435821056/PUNCHING_NAZIS_IS_A_SLIPPERY_SLOPE.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977510824602120192/CreativityDuke.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977608026020266084/If_the_shows_called_Invincible....mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977608146799456297/DUKE_NUKEM_RATES_YOUR_COCK.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977608251686412358/IM_NOT_MEMORIZING_THE_MULTIPLICATION_TABLE.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977608328014364702/Ive_got_a_peer_reviewed_study.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977608607141097532/Duke_Nukem_Says_Any_Females_Born_After_1993_Cant_Cook....mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977608723944067072/What_do_you_mean_you_lost_the_baby_.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977609042652438538/im_here_to_intercourse_your_dad..mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977609435847475230/wow_thats_a_lotta_words.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977609459142639726/IM_GONNA_WASH_MY_HANDS_BEFORE_I_PISS_AT_THE_MALL.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977609511487561818/WE_SHOULD_REPLACE_COVID-19.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977609514251599913/I_GOT_KINGS_WAITING_FOR_ME_ONLINE_fabioproductions.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977610049285406790/IM_HERE_TO_SHIT_ASS.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977610061914439740/I_LIKE_MONSTER_HUNTER_BUT_I_CANT_PLAY_IT_BECAUSE_IT_MAKES_ME_SAD_TO_HURT_THE_COOL_MONSTERS.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977610516639911996/Dunkaccino_but_its_dubbed_by_Duke_Nukem.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977612446133018675/ITS_TIME_TO_OOOOOH_OOOH_OOH_OOH_OOHOOOH_OOH_OOOH_OOH_OOH.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977612446963482644/Im_here_to_kick_ass_and_chug_purple_drank_until_I_experienice_mild_euphoria_and_Im_all_out_of_ass.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977612452588048394/WHAT_IF_HEAR_ME_OUT_BABE._THE_BALLS_GOT_HARD_TOO.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977612463526776933/KUNG_FU_PANDA_4_NOW_IN_THEATRE_NEAR_U.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977613080445976736/MY_ASS_YOUR_COCK._YOU_DO_THE_MATH..mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977613320427302952/IM_HERE_TO_TAKE_AMBIEN_AND_WATCH_MEMES.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977613456138203146/Am_A_Stranger_On_Twitter_And_I_Came_Across_Your_Profile_And_It_Looks_Interresting_To_Add_You_As_My_F.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977614236916273192/I_Named_Both_Of_My_Balls_After_Annoying_Orange_Characters.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977614237331488848/Drink_piss_and_live.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977614237692227614/MY_MASSIVE_NUTSACK_HAS_FILLED_WITH_CUM..mp4?size=4096",
    "https://cdn.discordapp.com/attachments/977500248459075604/977614262765764628/She_Wasnt_Lying_fabioproductions.mp4",
    "https://cdn.discordapp.com/attachments/977500248459075604/977614238484930600/I_MADE_A_DUKE_NUKEM_MII.mp4",
    "https://cdn.discordapp.com/attachments/977500248459075604/977614238128422932/HATE_ME_ALL_YOU_WANT.mp4",
    "https://cdn.discordapp.com/attachments/977500248459075604/977616805168316536/so_help_me_god_if_you_put_your_nsfw_in_general.mp4",
    "https://cdn.discordapp.com/attachments/708233505775288424/978036967801503764/Hey.mp4?size=4096",
    "https://cdn.discordapp.com/attachments/516504307902971904/988856808359735326/se.mp4"]
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  // The message will log into the console!
  message.channel.send(randomMessage);
    }
  }